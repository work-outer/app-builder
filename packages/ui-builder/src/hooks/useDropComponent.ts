import { useDrop, DropTargetMonitor } from 'react-dnd'
import { rootComponents } from '~utils/editor'
import useDispatch from './useDispatch'
import builder from '~core/models/composer/builder'
import { getTypeNames } from '~core/selectors/types'
import { useSelector } from 'react-redux'

export const useDropComponent = (
  componentId: string,
  // accept: (ComponentType)[] = rootComponents,
  accept?: (ComponentType)[],
  canDrop: boolean = true,
) => {
  const dispatch = useDispatch()
  const typeNames = useSelector(getTypeNames)

  if(!accept){
    accept = typeNames
  }

  const [{ isOver }, drop] = useDrop({
    accept,
    collect: monitor => ({
      isOver: monitor.isOver({ shallow: true }) && monitor.canDrop(),
    }),
    drop: (item: ComponentItemProps, monitor: DropTargetMonitor) => {
      if (!monitor.isOver()) {
        return
      }

      if (item.isMoved) {
        dispatch.components.moveComponent({
          parentId: componentId,
          componentId: <string>item.id,
        })
      } else if (item.isMeta) {
        dispatch.components.addMetaComponent(builder[item.type](componentId))
      } else {
        console.log("drop==item===", item);
        dispatch.components.addComponent({
          parentName: componentId,
          type: item.type,
          rootParentType: item.rootParentType,
          defaultProps: item.defaultProps,
        })
      }
    },
    canDrop: () => canDrop,
  })

  return { drop, isOver }
}
