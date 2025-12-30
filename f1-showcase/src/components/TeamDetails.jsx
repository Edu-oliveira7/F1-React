import DriverCard from './Layout';

const TeamGroup = ({ teamData }) => {
  return (
    <section className="team-group">
      <div className="team-header" style={{ backgroundColor: teamData.color }}>
        <img src={teamData.logo} alt={teamData.team} className="team-logo" />
        <h2>{teamData.team}</h2>
      </div>
      <div className="drivers-grid">
        {teamData.drivers.map(driver => (
          <DriverCard key={driver.id} driver={driver} teamColor={teamData.color} />
        ))}
      </div>
    </section>
  );
};

export default TeamGroup;