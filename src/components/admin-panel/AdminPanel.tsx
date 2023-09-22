import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  VStack
} from '@chakra-ui/react';
import { adminPanelStyles } from './AdminPanelStyles';
import { useEffect, useState } from 'react';
import { getAllUsers } from '@util/api-calls.ts';
import { TUser } from '@/types/user.ts';

const AdminPanel = () => {
  const isAdminPanelOpen = useAppSelector(
    (state) => state.adminPanel.isAdminPanelOpen
  );

  const data = useSelector((state: RootState) => ({
    categories: state.categories,
    products: state.products
  }));

  const [userData, setUserData] = useState<TUser[]>();

  if (!isAdminPanelOpen) return null;

  const loadData = async () => {
    await getAllUsers().then((res) => setUserData(res.data)).catch((err) => {
      throw new Error(err);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Box color='white'>
        <Link to={''}>Create New Category</Link>
      </Box>

      <Box color='white'>
        <Link to={''}>Edit categories</Link>
      </Box>

      <ul>
        {data.categories.map((category) => (
          <Accordion defaultIndex={[0]} allowMultiple key={category.id}>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    style={adminPanelStyles}
                    as='span'
                    flex='1'
                    textAlign='left'
                  >
                    {category.categoryName}
                  </Box>
                  <AccordionIcon style={adminPanelStyles} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <VStack color='white' align='stretch'>
                  {data.products
                    .filter(
                      (product) => product.category === category.categoryName
                    )
                    .map((product) => (
                      <Box key={product.id}>
                        <Link to={`${product.category}/${product.name}`}>
                          {product.name}
                        </Link>
                      </Box>
                    ))}
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))}
      </ul>
      <ul>

      </ul>
    </div>
  );
};

export default AdminPanel;
