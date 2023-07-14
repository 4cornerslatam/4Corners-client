// import Slider from 'react-slick';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ButtonToServices } from "../components/ButtonToServices/ButtonToServices";
import data from "../translation/spanish.json";
import { MembersCard } from "../components/MembersCard/MembersCard";

const Team = (): JSX.Element => {
  const team = data.team;

  return (
    <main className="team">
      <section className="team-info">
        <div className="team-info-t-p">
          <div className="team-info-t-p-title">
            <p className="team-info-t-p-title-linea-1">
              {team.TITLE.titleLine1}
            </p>
            <p className="team-info-t-p-title-linea-2">
              {team.TITLE.titleLine2}
            </p>
          </div>
          <div className="team-info-t-p-paragraph">
            <p>{team.DESCRIPTION}</p>
          </div>
        </div>
        <div className="team-info-button">
          <ButtonToServices />
        </div>
      </section>
      <section className="team-people">
        <div className="desktop">
          <MembersCard memberId="1" />
          <MembersCard memberId="2" />
          <MembersCard memberId="3" />
          <MembersCard memberId="4" />
        </div>
        <div className="mobile">
          <Carousel swipeable={true}>
            <MembersCard memberId="1" />
            <MembersCard memberId="2" />
            <MembersCard memberId="3" />
            <MembersCard memberId="4" />
          </Carousel>
        </div>
      </section>
    </main>
  );
};

export { Team };
