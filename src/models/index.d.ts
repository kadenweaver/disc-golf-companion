import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerUserGameScore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserGameScore, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: string | null;
  readonly frontNine?: boolean | null;
  readonly userScores?: (number | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserGameScore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserGameScore, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: string | null;
  readonly frontNine?: boolean | null;
  readonly userScores?: (number | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserGameScore = LazyLoading extends LazyLoadingDisabled ? EagerUserGameScore : LazyUserGameScore

export declare const UserGameScore: (new (init: ModelInit<UserGameScore>) => UserGameScore) & {
  copyOf(source: UserGameScore, mutator: (draft: MutableModel<UserGameScore>) => MutableModel<UserGameScore> | void): UserGameScore;
}