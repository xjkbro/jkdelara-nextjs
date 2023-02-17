import {
    faTwitter as Twitter,
    faLinkedin as LinkedIn,
    faInstagram as Instagram,
    faFacebook as Facebook,
    faYoutube as YouTube,
    faGithub as GitHub,
    faUnsplash as Unsplash
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { socials } from '../constants/socials'

export default function Footer() {
    // const socials = await getSocials();

    const date = new Date()
    return (
        <footer className="text-gray-600 body-font">
            <div className="bg-gray-100">
                <div className="container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row">
                    <p className="text-sm text-center text-gray-500 sm:text-left">© <>{date.getFullYear()}</> —
                        <a href="https://twitter.com/jkdelara" rel="noopener noreferrer" className="ml-1 text-gray-600" target="_blank">Jason-Kyle De Lara</a>
                    </p>
                    <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                        {socials.data.map((social) => (
                            <>
                                <a className="mr-2 text-gray-500" key={social.id} href={social.attributes.url}>
                                    {
                                        (social.attributes.name == "Twitter") ? <FontAwesomeIcon icon={Twitter} /> :
                                            (social.attributes.name == "Instagram") ? <FontAwesomeIcon icon={Instagram} /> :
                                                (social.attributes.name == "LinkedIn") ? <FontAwesomeIcon icon={LinkedIn} /> :
                                                    (social.attributes.name == "Facebook") ? <FontAwesomeIcon icon={Facebook} /> :
                                                        (social.attributes.name == "YouTube") ? <FontAwesomeIcon icon={YouTube} /> :
                                                            (social.attributes.name == "GitHub") ? <FontAwesomeIcon icon={GitHub} /> :
                                                                (social.attributes.name == "Unsplash") ? <FontAwesomeIcon icon={Unsplash} /> :
                                                                    <></>
                                    }
                                </a>
                            </>))}
                    </span>
                </div>
            </div>
        </footer>
    )
}

async function getSocials() {
    const res = await fetch('https://cms.jsondelara.com/api/socials?fields[0]=name&fields[1]=url', { cache: 'no-store' })
    return res.json();
}
