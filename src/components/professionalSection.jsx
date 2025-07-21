function Professional({ profInfo }) {
  return (
    <div>
      <div>
        <p>
          {profInfo.job}, {profInfo.company}
        </p>
        <p>{profInfo.description}</p>
      </div>
      <p>
        {profInfo.start} - {profInfo.end}
      </p>
    </div>
  );
}

export default Professional;
