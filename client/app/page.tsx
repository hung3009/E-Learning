"use client";
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false) ;
  const [activeltem, setActiveItem] = useState(0);
  return (
    <div>
      <Heading
        title="ELearning"
        description="Learning is a platform for students to learn and get help from teachers"
        keywords="Prograaming, MERN, Redux, Machine Learning"
      />
      <Header 
        open={open} 
        setOpen={setOpen}
        activeItem={activeltem}
      />
    </div>
  );
};
export default Page;
