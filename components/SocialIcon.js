import theme from '../theme/colors';


const SocialIcon = ({ children, link }) => {
  return (
    <a href={link}>
      <div>
        {children}
      </div>
      <style jsx>
        {
          `
          div {
            width: 50px;
            height: 50px;
            border-radius: 15%;
            display: flex;
            justify-content: center;
            align-items: center; 
            margin: 10px;            
          }
          a {
            cursor: pointer;             
          }
          div:hover {
            border: 1px solid ${theme.green};
            transition: all 0.2s;  
          }
          `
        }
      </style>
    </a>
  );
};

export default SocialIcon;
