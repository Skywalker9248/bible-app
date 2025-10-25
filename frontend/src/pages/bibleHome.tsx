import styled from "styled-components";

type DashboardWidget = {
  id: number;
  name: string;
  description: string;
  icon: string;
  route: string;
};

const BibleHomePage = ({
  dashboardWidgets,
}: {
  dashboardWidgets: DashboardWidget[];
}) => {
  return (
    <BibleContainer>
      {dashboardWidgets.map((widget) => (
        <WidgetContainer
          key={widget.id}
          onClick={() => window.location.assign(widget.route)}
        >
          <h1>{widget.name}</h1>
          <p>{widget.description}</p>
          <p>{widget.icon}</p>
        </WidgetContainer>
      ))}
    </BibleContainer>
  );
};

const BibleContainer = styled.div`
  padding: 80px 50px 50px 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(200px, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  min-height: 100vh;
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 70px 15px 15px 15px;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
  }

  @media (max-width: 480px) {
    padding: 70px 10px 10px 10px;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
`;

const WidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #1e1e1e;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #333;
  min-height: 200px;
  cursor: pointer;

  h1 {
    margin: 0 0 10px 0;
    font-size: 1.5rem;
    color: #ffffff;
    text-align: center;
  }

  p {
    margin: 5px 0;
    color: #cccccc;
    text-align: center;
    font-size: 0.9rem;
  }
`;

export default BibleHomePage;
