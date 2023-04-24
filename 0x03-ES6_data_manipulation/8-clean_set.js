export default function cleanSet(set, startString) {
  const results = [];

  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach((s) => {
    if (typeof s === 'string' && s.startsWith(startString)) {
      results.push(s.slice(startString.length));
    }
  });
  return results.join('-');
}
