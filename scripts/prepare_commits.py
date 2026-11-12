import subprocess
import os
import sys

def run_git(args):
    result = subprocess.run(["git"] + args, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Error running git {' '.join(args)}:\n{result.stderr}")
    return result

# 1. First verify git config
name = subprocess.run(["git", "config", "user.name"], capture_output=True, text=True).stdout.strip()
email = subprocess.run(["git", "config", "user.email"], capture_output=True, text=True).stdout.strip()

print(f"Current git user: {name} <{email}>")
if "Hunzila Rajput" not in name:
    run_git(["config", "user.name", "Hunzila Rajput"])
if "HunzilaRajput746" not in email:
    run_git(["config", "user.email", "134519742+HunzilaRajput746@users.noreply.github.com"])

print("Ready to perform granular commits.")

