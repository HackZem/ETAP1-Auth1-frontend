import { ComponentProps } from "react";

export interface IDefaultInput extends ComponentProps<"input"> {
    label: string,
    id: string,
    type: string,
    errorMessage: string | undefined | null,
}