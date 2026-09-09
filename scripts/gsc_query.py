import google.oauth2.service_account
import google.auth.transport.requests
import requests
from urllib.parse import quote
import json
import sys
from datetime import date, timedelta

KEY_FILE = "/home/darrkito/Yume/yume-507307-f567f455b931.json"
SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"]
creds = google.oauth2.service_account.Credentials.from_service_account_file(KEY_FILE, scopes=SCOPES)
creds.refresh(google.auth.transport.requests.Request())
headers = {"Authorization": f"Bearer {creds.token}", "Content-Type": "application/json"}
BASE = f"https://www.googleapis.com/webmasters/v3/sites/{quote('https://studioyume.mx/', safe='')}/searchAnalytics/query"

end = date.today() - timedelta(days=2)
start = date(2026, 8, 27)  # site launch date — no data before this

def query(dimensions, row_limit=250, extra=None):
    body = {
        "startDate": start.isoformat(),
        "endDate": end.isoformat(),
        "dimensions": dimensions,
        "rowLimit": row_limit,
    }
    if extra:
        body.update(extra)
    r = requests.post(BASE, headers=headers, json=body)
    r.raise_for_status()
    return r.json()

mode = sys.argv[1] if len(sys.argv) > 1 else "query"

if mode == "query":
    data = query(["query"])
elif mode == "page":
    data = query(["page"])
elif mode == "page_query":
    data = query(["page", "query"], row_limit=1000)
elif mode == "date":
    data = query(["date"])
elif mode == "totals":
    data = query([])

print(json.dumps(data, indent=1))
print(f"# window: {start} to {end}", file=sys.stderr)
