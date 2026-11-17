export async function GET() {
  const securityTxt = `Contact: mailto:security@cortelo.tech
Expires: 2027-12-31T23:59:59.000Z
Preferred-Languages: en
Canonical: https://cortelo.tech/.well-known/security.txt
Policy: https://cortelo.tech/legal/privacy
Hiring: https://cortelo.tech/about
`;

  return new Response(securityTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

