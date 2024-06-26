import { Container, Row, Col } from "../bootstrap"
import AboutPagesCard from "../AboutPagesCard/AboutPagesCard"
import {
  OurGoalsCardContent,
  OurMissionCardContent
} from "../GoalsAndMissionCardContent/GoalsAndMissionCardContent"
import { useTranslation } from "next-i18next"

const GoalsAndMission = () => {
  const { t } = useTranslation("goalsandmission")
  return (
    <Container>
      <Row>
        <Col>
          <h1
            className={`fw-bold lh-base tracking-tighter mt-3 mt-sm-4 mt-md-5`}
          >
            {t("header")}
          </h1>
          <AboutPagesCard title={t("goals.title")}>
            <OurGoalsCardContent />
          </AboutPagesCard>
          <AboutPagesCard title={t("mission.title")}>
            <OurMissionCardContent />
          </AboutPagesCard>
        </Col>
      </Row>
    </Container>
  )
}

export default GoalsAndMission
