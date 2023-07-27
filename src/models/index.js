// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserGameScore } = initSchema(schema);

export {
  UserGameScore
};