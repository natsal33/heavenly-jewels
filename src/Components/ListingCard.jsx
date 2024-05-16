import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Typography } from "@material-tailwind/react";

function ListingCard({ img, name, id, price }) {
  return (
    <Link to={`/listing/${id}`}>
      <Card shadow={false} className="border border-gray-300">
        <CardBody className="pb-0">
          <img src={img} alt={img} className="min-w-[280px] w-full" />
          <div className="flex justify-between">
            <div>
              <Typography className="mb-2" color="blue-gray" variant="h5">
                {name}
              </Typography>
              <div className="mb-5 flex items-center gap-2">
                <div className="h-5 w-5 rounded border border-gray-900 bg-brown-300 "></div>
                <div className="h-5 w-5 rounded border border-blue-gray-100 "></div>
                <div className="h-5 w-5 rounded border border-blue-gray-100 bg-gray-900 "></div>
              </div>
            </div>
            <Typography variant="h5" className="text-gray-600">
              {price}
            </Typography>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}

export default ListingCard;
