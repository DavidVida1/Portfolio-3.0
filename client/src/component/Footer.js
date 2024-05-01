import { FaArrowUp } from "react-icons/fa";
import styled from "styled-components";

const Footer = () => {
  /* const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 100);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
*/
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling
    });
  };

  return (
    <FooterContainer>
      <p>
        © 2024 <span>David Vidal</span>
      </p>
      <p>❤️‍🔥</p>
      <button onClick={scrollToTop}>
        BACK TO TOP <FaArrowUp />
      </button>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 50px;

  background-color: var(--color-black);
  color: var(--color-white);
  font-size: clamp(1rem, 4.2vw, 2rem);

  & button {
    color: var(--color-white);
  }
  & button svg:hover {
    color: #ffd700;
    transform: translateY(-5px);
  }
  & p:nth-child(1) span {
    font-weight: 700;
  }
  & p:nth-child(2) {
    font-weight: 300;
    font-style: italic;
  }
  & button:nth-child(3) {
    font-weight: 700;
    background: transparent;
    border: none;
  }
`;
