import { useCallback, useMemo } from 'react';
import {
  Select as ChakraSelect,
  createListCollection,
  Portal,
} from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';

const Select = ({
  options,
  multiple,
  positioning,
  value: selected,
  onValueChange,
  ...props
}) => {
  const collection = useMemo(
    () => createListCollection({ items: options }),
    [options]
  );

  const handleValueChange = useCallback(
    (e) => {
      if (multiple) {
        onValueChange(e.value);
      } else {
        onValueChange(e.value[0]);
      }
    },
    [multiple, onValueChange]
  );

  const selectedValue = useMemo(() => {
    if (multiple) {
      return selected || [];
    }

    return selected !== undefined ? [selected] : [];
  }, [multiple, selected]);

  return (
    <ChakraSelect.Root
      {...props}
      multiple={multiple}
      focusRing='mixed'
      positioning={{ sameWidth: true, ...positioning }}
      collection={collection}
      value={selectedValue}
      onValueChange={handleValueChange}
    >
      <ChakraSelect.HiddenSelect />
      <ChakraSelect.Trigger>
        <ChakraSelect.ValueText>
          <ChakraSelect.Context>
            {(select) => {
              const items = select.selectedItems;
              if (items.length === 0) return ''; // props.placeholder
              if (items.length === 1)
                return select.collection.stringifyItem(items[0]);
              return `${items.length} selected`;
            }}
          </ChakraSelect.Context>
        </ChakraSelect.ValueText>
        <FaChevronDown />
      </ChakraSelect.Trigger>
      <Portal>
        <ChakraSelect.Positioner>
          <ChakraSelect.Content>
            {collection.items.map((item) => (
              <ChakraSelect.Item item={item.value} key={item.value}>
                {item.label}
                <ChakraSelect.ItemIndicator />
              </ChakraSelect.Item>
            ))}
          </ChakraSelect.Content>
        </ChakraSelect.Positioner>
      </Portal>
    </ChakraSelect.Root>
  );
};

export default Select;
