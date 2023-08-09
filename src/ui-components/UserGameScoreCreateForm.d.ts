/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserGameScoreCreateFormInputValues = {
    user?: string;
    frontNine?: boolean;
    userScores?: number[];
    createdAt?: string;
    updatedAt?: string;
};
export declare type UserGameScoreCreateFormValidationValues = {
    user?: ValidationFunction<string>;
    frontNine?: ValidationFunction<boolean>;
    userScores?: ValidationFunction<number>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserGameScoreCreateFormOverridesProps = {
    UserGameScoreCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    user?: PrimitiveOverrideProps<TextFieldProps>;
    frontNine?: PrimitiveOverrideProps<SwitchFieldProps>;
    userScores?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserGameScoreCreateFormProps = React.PropsWithChildren<{
    overrides?: UserGameScoreCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserGameScoreCreateFormInputValues) => UserGameScoreCreateFormInputValues;
    onSuccess?: (fields: UserGameScoreCreateFormInputValues) => void;
    onError?: (fields: UserGameScoreCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserGameScoreCreateFormInputValues) => UserGameScoreCreateFormInputValues;
    onValidate?: UserGameScoreCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserGameScoreCreateForm(props: UserGameScoreCreateFormProps): React.ReactElement;
