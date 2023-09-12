const mapping: Record<string, string> = {
  answers: 'answer',
  organizations: 'organization',
  questions: 'question',
  surveys: 'survey',
  users: 'user',
  vendors: 'vendor',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
