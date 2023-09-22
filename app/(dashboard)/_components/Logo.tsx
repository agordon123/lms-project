import Image from "next/image";

/**
 * Renders the logo image component.
 * @returns JSX element
 */
export const Logo = () =>{
    return (
        <Image height={130} width={130} alt="logo" src="/logo.svg"></Image>
    )
}