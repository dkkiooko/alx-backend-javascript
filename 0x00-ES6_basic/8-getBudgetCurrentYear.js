function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
    const budget = {
        [`income-${getCurrentYear()}-${income}`]: income,
        [`gdp-${getCurrentYear()}-${gdp}`]: gdp,
        [`capita-${getCurrentYear()}-${capita}`]: capita
    };
    return budget;
}