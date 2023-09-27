import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { addCategory } from '@/redux/features/categories/categoriesSlice';
import { Button, Flex, Heading, Input, VStack } from '@chakra-ui/react';
import { BackgroundColorPicker } from './BackgroundColorPicker';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';

export const CategoryForm = () => {
  const [selectedColor, setSelectedColor] = useState<string>('');
  const categoryNameRef = useRef<HTMLInputElement>(null);

  const uuid = useAppSelector((state) => state.categories.length + 1);
  const dispatch = useAppDispatch();

  const addCategoryHandler = ({
                                newCategoryName,
                                backgroundColor
                              }: {
    newCategoryName: string | undefined;
    backgroundColor: string;
  }) => {
    if (!newCategoryName || !selectedColor)
      return toast.error('Insert all data');

    if (newCategoryName.startsWith(' '))
      return toast.error('Category name can not start with space');

    newCategoryName = newCategoryName.trimEnd().replaceAll(' ', '-');

    dispatch(
      addCategory({
        id: uuid,
        backgroundColor,
        categoryName: newCategoryName,
        href: newCategoryName
      })
    );

    setSelectedColor('');
    resetForm();
    toast.success('New category added!');
  };

  const resetForm = () => {
    if (categoryNameRef.current !== null) {
      categoryNameRef.current.value = '';
      setSelectedColor('');
    }
  };

  return (
    <Flex
      bg='bg.secondary'
      minH='300px'
      borderRadius='xl'
      direction={{ base: 'column' }}
      overflow='hidden'
      p={4}
      gap={8}
    >
      <Flex gap={4} w='100%' direction='column'>
        <Heading
          color='text.secondary'
          fontSize={{ base: '22px', md: '28px' }}
          fontWeight='500'
          w='fit-content'
          pl={2}
        >
          Insert category name:
        </Heading>
        <Input
          ref={categoryNameRef}
          color='text.primary'
          fontSize={{ base: '22px', md: '24px' }}
          pl={2}
          w={{ base: '100%', md: '100%' }}
          bg='bg.gray'
          border='none'
          placeholder='New category name'
        />
      </Flex>

      <VStack alignItems='flex-start' gap={4} pl={2}>
        <Heading
          color='text.secondary'
          fontSize={{ base: '22px', md: '28px' }}
          fontWeight='500'
        >
          Select category background color:
        </Heading>
        <BackgroundColorPicker setSelectedColor={setSelectedColor} />
      </VStack>

      <Button
        ml={2}
        mt={6}
        variant='outline'
        borderColor='text.primary'
        color='text.primary'
        fontSize={{ base: '22px', md: '24px' }}
        w={{ base: '100%', md: '200px' }}
        h={{ base: '50px', md: '80px' }}
        onClick={() =>
          addCategoryHandler({
            newCategoryName: categoryNameRef.current?.value,
            backgroundColor: selectedColor
          })
        }
      >
        Send
      </Button>
    </Flex>
  );
};
