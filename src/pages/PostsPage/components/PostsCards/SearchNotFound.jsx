export default function SearchNotFound({ searchTitle }) {
  return (
    <div className="text-center mt-5">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
          clipRule="evenodd"
          viewBox="0 0 32 32"
          style={{ width: "150px" }}
        >
          <path
            fill="#34a853"
            d="m8.663 19.095-6.785 6.784a3.001 3.001 0 0 0 4.243 4.243l6.784-6.785A11.937 11.937 0 0 0 19 25c6.623 0 12-5.377 12-12S25.623 1 19 1 7 6.377 7 13c0 2.224.606 4.307 1.663 6.095Zm1.176 1.652-6.546 6.546a.999.999 0 1 0 1.414 1.414l6.546-6.546c-.51-.431-.983-.904-1.414-1.414ZM19 3c5.519 0 10 4.481 10 10s-4.481 10-10 10S9 18.519 9 13 13.481 3 19 3Zm0 2c-4.415 0-8 3.585-8 8s3.585 8 8 8 8-3.585 8-8-3.585-8-8-8Zm0 2c3.311 0 6 2.689 6 6s-2.689 6-6 6-6-2.689-6-6 2.689-6 6-6Zm-1.414 6-1.293 1.293a1 1 0 0 0 1.414 1.414L19 14.414l1.293 1.293a1 1 0 0 0 1.414-1.414L20.414 13l1.293-1.293a1 1 0 0 0-1.414-1.414L19 11.586l-1.293-1.293a1 1 0 0 0-1.414 1.414L17.586 13Z"
            className="color000000 svgShape"
          />
        </svg>
      </div>
      <p
        className="text-center mt-3"
        style={{ fontSize: "20px", color: "#bdbdbd" }}
      >
        {`We didn't find any post for "${searchTitle}" !`}
      </p>
    </div>
  );
}
