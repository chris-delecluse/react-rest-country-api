import { InputHTMLAttributes } from "react";

export type InputSelectType = & InputHTMLAttributes<HTMLSelectElement> & {
    values?: Array<any>;
    onSelectedVal?: (val: any) => void;
}
