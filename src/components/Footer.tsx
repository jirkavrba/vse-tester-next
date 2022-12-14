import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { ApplicationContext } from "../layout/ApplicationLayout";

const Footer: React.FC = () => {
    const { darkmode } = useContext(ApplicationContext);

    return (
        <footer
            className={`${
                darkmode ? "bg-black" : "bg-gray-100"
            } flex flex-row justify-between py-5 px-10`}
        >
            <span
                className={`${
                    darkmode ? "text-neutral-700" : "text-neutral-400"
                } text-xs font-black uppercase`}
            >
                VŠE Tester
            </span>
            <a
                className="text-gray-500"
                href="https://github.com/jirkavrba/vse-tester"
                target="_blank"
                rel="noreferrer"
            >
                <FaGithub />
            </a>
        </footer>
    );
};

export default Footer;
