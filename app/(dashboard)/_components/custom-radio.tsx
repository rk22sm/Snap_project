import { Radio } from "@nextui-org/radio";
import { RadioProps } from "@nextui-org/radio";
import { cn } from "@nextui-org/theme";

interface CustomRadioProps extends RadioProps {
    children: React.ReactNode;
}

export const CustomRadio = (props: CustomRadioProps) => {
    const { children, ...otherProps } = props;

    return (
        <Radio
            {...otherProps}
            classNames={{
                base: cn(
                    "inline-flex m-0 bg-content2 hover:bg-content3 items-center",
                    "flex-row max-w-[300px] flex-1  cursor-pointer rounded-md gap-3 p-3 border-2 border-transparent",
                    "data-[selected=true]:border-primary",
                ),
                wrapper: cn(
                    "group-data-[hover-unselected=true]:border-content4",
                ),
                description: cn("text-foreground-500"),
            }}
        >
            {children}
        </Radio>
    );
};
