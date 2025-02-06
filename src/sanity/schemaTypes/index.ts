import { type SchemaTypeDefinition } from 'sanity'
import banner from '../schemas/banner'
import category from './category'
import product from './products'
export const schema: { types: SchemaTypeDefinition[] } = {
  //banner , product , category
  types: [banner, product, category],
  
}
