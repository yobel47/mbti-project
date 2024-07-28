import {
  RadioGroup,
  Radio,
  useRadio,
  VisuallyHidden,
  RadioProps,
  cn,
} from "@nextui-org/react";

export const CustomRadio = (props: RadioProps) => {
  const {
    Component,
    children,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
    getControlProps,
  } = useRadio(props);

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        "group flex-1 inline-flex items-center justify-between hover:bg-content2 flex-row-reverse",
        "max-full cursor-pointer border-2 border-default rounded-2xl gap-4 p-4 text-xl",
        "data-[selected=true]:border-black dark:data-[selected=true]:border-white "
      )}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <span {...getWrapperProps()} className={cn("")}>
        <span {...getControlProps()} />
      </span>
      <div {...getLabelWrapperProps()}>
        {children && <span {...getLabelProps()}>{children}</span>}
      </div>
    </Component>
  );
};
