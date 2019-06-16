export const prepareReviews = (data) => {
  const getDate = (val) => val.match(/^\d{4}-\d{2}-\d{2}/)[0];
  const getMonth = (val) => val.match(/^\d{4}-(\d{2})-\d{2}/)[1];
  const getYear = (val) => val.match(/^\d{4}/)[0];

  const getMonthName = (month) => {
    const MONTHS = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
    const monthNum = parseInt(month, 10);

    return MONTHS[monthNum - 1];
  };

  return data.map((it) => {
    return {
      id: it.id,
      date: getDate(it.date),
      dateString: `${getMonthName(getMonth(it.date))} ${getYear(it.date)}`,
      comment: it.comment,
      rating: it.rating,
      user: {
        avatarUrl: it.user.avatar_url,
        id: it.user.id,
        isPro: it.user.is_pro,
        name: it.user.name
      }
    };
  });
};
