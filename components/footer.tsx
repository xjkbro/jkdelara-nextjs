import {
    faTwitter as Twitter,
    faLinkedin as LinkedIn,
    faInstagram as Instagram,
    faFacebook as Facebook,
    faYoutube as YouTube,
    faGithub as GitHub,
    faUnsplash as Unsplash,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socials } from "../constants/socials";

export default function Footer() {
    // const socials = await getSocials();

    const date = new Date();
    return (
        <footer className="w-full mx-auto dark:text-fifth body-font md:w-2/3 my-12">
            <div className="container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row">
                <p className="text-sm text-center sm:text-left">
                    © <>{date.getFullYear()}</> —
                    <a
                        href="https://twitter.com/jkdelara"
                        rel="noopener noreferrer"
                        className="ml-1"
                        target="_blank"
                    >
                        Jason-Kyle De Lara
                    </a>
                </p>
                <span className="inline-flex justify-center gap-8 md:gap-4 mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                    {socials.data.map((social) => (
                        <a
                            className="justify-center"
                            aria-label={social.attributes.name + " icon link"}
                            key={social.id}
                            href={social.attributes.url}
                        >
                            {social.attributes.name == "Twitter" ? (
                                <FontAwesomeIcon
                                    icon={Twitter}
                                    style={{ height: "1.5rem" }}
                                />
                            ) : social.attributes.name == "Instagram" ? (
                                <FontAwesomeIcon
                                    icon={Instagram}
                                    style={{ height: "1.5rem" }}
                                />
                            ) : social.attributes.name == "LinkedIn" ? (
                                <FontAwesomeIcon
                                    icon={LinkedIn}
                                    style={{ height: "1.5rem" }}
                                />
                            ) : social.attributes.name == "Facebook" ? (
                                <FontAwesomeIcon
                                    icon={Facebook}
                                    style={{ height: "1.5rem" }}
                                />
                            ) : social.attributes.name == "YouTube" ? (
                                <FontAwesomeIcon
                                    icon={YouTube}
                                    style={{ height: "1.5rem" }}
                                />
                            ) : social.attributes.name == "GitHub" ? (
                                <FontAwesomeIcon
                                    icon={GitHub}
                                    style={{ height: "1.5rem" }}
                                />
                            ) : social.attributes.name == "Unsplash" ? (
                                <FontAwesomeIcon
                                    icon={Unsplash}
                                    style={{ height: "1.5rem" }}
                                />
                            ) : (
                                <></>
                            )}
                        </a>
                    ))}
                </span>
            </div>
        </footer>
    );
}

async function getSocials() {
    const res = await fetch(
        "https://cms.jkdelara.com/api/socials?fields[0]=name&fields[1]=url",
        { cache: "no-store" }
    );
    return res.json();
}
