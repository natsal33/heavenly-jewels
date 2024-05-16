import React, { useState } from "react";

import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";

function Logout() {
  return (
    <section className="grid text-center h-screen items-center p-8">
      <div>
        <Typography variant="h3" color="blue-gray" className="mb-2">
          Signed Out
        </Typography>
        <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
          You have successfully signed out.
        </Typography>
      </div>
    </section>
  )
}

export default Logout