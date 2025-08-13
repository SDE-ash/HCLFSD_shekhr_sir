import { Carousel } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      {/* Centered Heading */}
      <h2 className="text-center mt-4 mb-4">
        Welcome to All Associates of HCL
      </h2>

      {/* Carousel */}
      <Carousel interval={2000} fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/image1.jpg"
            alt="First slide"
            style={{ height: "400px", objectFit: "cover" }}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/image2.jpg"
            alt="Second slide"
            style={{ height: "400px", objectFit: "cover" }}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/image3.jpg"
            alt="Third slide"
            style={{ height: "500px", objectFit: "cover" }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
