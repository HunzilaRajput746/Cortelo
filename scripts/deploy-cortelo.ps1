$ErrorActionPreference = "Stop"

ssh -o BatchMode=yes devhunzila "bash /home/ubuntu/cortelo/scripts/deploy-cortelo.sh"
if ($LASTEXITCODE -ne 0) {
    throw "Remote Cortelo deployment failed."
}
