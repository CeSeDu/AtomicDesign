import React from "react";

const SocialMediaLink = ({ href, name }) => {
  return <a className="text-white" href={href}> 
    {name}
  </a>;
};
export default SocialMediaLink;