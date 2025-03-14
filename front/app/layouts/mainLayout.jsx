import '../../public/assets/scss/base/reset.scss';

import { Outfit } from "next/font/google";
const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "700"], // Choisis les styles que tu veux
  });
const MainLayout = ({children}) => {
    return (
        <html lang="en">
            <body className={`${outfit.className}`}>
                {children}
            </body>
        </html>
    )
}

export default MainLayout