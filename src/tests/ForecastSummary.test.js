import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps= {
    date: 1111111,
    description: "Stub description",
    icon: "forecast-icon",
    temperature: 22,
  };

  it("renders correctly", () => {
    const { getByText } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
      />
    );
    expect(
      { getByText("date").toHaveClass("forecast-summary__date")},
      expect({ getByText ("Stub description").toHaveClass(
        "forecast-summary__description"
      )}),
      expect({ getByTestId ("forecast-icon").toHaveClass(
        "forecast-summary__icon"
      )}),
      expect({ getByText ("22°C").toHaveClass("forecast-summary__temperature")
     });
 
  )};

 it("render correct values for props", () => {
   const { getByText, getByTestId } = render(
     <ForecastSummary
       date={validProps.date}
       description={validProps.description}
       icon={validProps.icon}
       temperature={validProps.temperature}
     />
   );
  });
 expect(
     { getByText("date").toHaveClass("forecast-summary__date")},
     expect({ getByText ("Stub description").toHaveClass(
       "forecast-summary__description"
     )}),
     expect({ getByTestId ("forecast-icon").toHaveClass(
       "forecast-summary__icon"
     )}),
     expect({ getByText ("22°C").toHaveClass("forecast-summary__temperature")
 
  });





/*describe("LocationDetails", () => {
  it("renders the correct city and location props", () => {
    const { getByText } = render(
      <LocationDetails city="Manchester" country="UK" />
    );

    expect(getByText("Manchester, UK")).toHaveClass("location-details");
  });
});
*/