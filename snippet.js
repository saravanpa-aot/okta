<Table>
  <thead>
    <tr>
      <th>Claim</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    {Object.entries(userInfo).map((claimEntry) => {
      const claimName = claimEntry[0];
      const claimValue = claimEntry[1];
      if (claimName === 'name' || claimName === 'email') {
        const claimId = `claim-${claimName}`;
        return (
          <tr key={claimName}>
            <td>{claimName}</td>
            <td id={claimId}>{claimValue.toString()}</td>
          </tr>
        );
      } else {
        return null;
      }
    })}
  </tbody>
</Table>
