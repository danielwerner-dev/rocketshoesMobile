import styled from 'styled-components/native';
import { darken } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.View`
  background: ${colors.dark};
  margin-top: 65px;
`;

export const Product = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 220px;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.dark};
`;

export const ProductPrices = styled.View`
  margin-top: 20px;
`;

export const ProductOldPrice = styled.Text`
  font-size: 12px;
  color: #8c8c8c;
  text-decoration: line-through;
`;

export const Shipment = styled.Text`
  margin: 0px 0px 10px 0px;
  font-weight: bold;
  color: ${colors.green};
`;

export const ProductPrice = styled.Text`
  margin: 0px 0px;
  font-size: 20px;
  font-weight: bold;
  color: ${colors.dark};
`;

export const AddButton = styled.TouchableOpacity`
  background: ${colors.blue};
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const ProductAmount = styled.View`
  padding: 12px;
  background: ${darken(0.03, colors.blue)};

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
