export async function GET() {
  const securityTxt = `Contact: mailto:security@cortelo.ai
Expires: 2027-12-31T23:59:59.000Z
Preferred-Languages: en
Canonical: https://cortelo.ai/.well-known/security.txt
Policy: https://cortelo.ai/legal/security
Hiring: https://cortelo.ai/about
`;

  return new Response(securityTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

