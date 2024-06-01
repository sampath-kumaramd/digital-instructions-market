type FAQ = {
    question: string;
    answer: string;
  };
  
 export type Workflow = {
  text: string;
  subText: string;
  imageSrc: string;
  category: string;
  heading: string;
  about: string;
  FAQ: FAQ[];
};