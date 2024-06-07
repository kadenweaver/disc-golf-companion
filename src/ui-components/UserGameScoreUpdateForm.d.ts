/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { UserGameScore } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserGameScoreUpdateFormInputValues = {
    user?: string;
    frontNine?: boolean;
    userScores?: number[];
    createdAt?: string;
    updatedAt?: string;
};
export declare type UserGameScoreUpdateFormValidationValues = {
    user?: ValidationFunction<string>;
    frontNine?: ValidationFunction<boolean>;
    userScores?: ValidationFunction<number>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserGameScoreUpdateFormOverridesProps = {
    UserGameScoreUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    user?: PrimitiveOverrideProps<TextFieldProps>;
    frontNine?: PrimitiveOverrideProps<SwitchFieldProps>;
    userScores?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserGameScoreUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserGameScoreUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userGameScore?: UserGameScore;
    onSubmit?: (fields: UserGameScoreUpdateFormInputValues) => UserGameScoreUpdateFormInputValues;
    onSuccess?: (fields: UserGameScoreUpdateFormInputValues) => void;
    onError?: (fields: UserGameScoreUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserGameScoreUpdateFormInputValues) => UserGameScoreUpdateFormInputValues;
    onValidate?: UserGameScoreUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserGameScoreUpdateForm(props: UserGameScoreUpdateFormProps): React.ReactElement;
