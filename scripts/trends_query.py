"""
Real Google Trends access via pytrends (unofficial wrapper around
trends.google.com's public endpoints — no login/API key, no official Trends
API is publicly available). Run from the venv: .trends-venv/bin/python3.

Gotcha: rate-limited hard (429) on back-to-back calls — sleep 15-25s between
build_payload() calls, and don't pass retries=/backoff_factor= to TrendReq()
(pytrends' internal Retry() call breaks on urllib3>=2, unfixed upstream).

Usage:
  .trends-venv/bin/python3 scripts/trends_query.py interest "kw1" "kw2" ...   # up to 5, MX, 12mo
  .trends-venv/bin/python3 scripts/trends_query.py related "kw"              # top+rising related queries
  .trends-venv/bin/python3 scripts/trends_query.py region "kw"               # interest by state
"""
import sys
from pytrends.request import TrendReq

pytrends = TrendReq(hl="es-MX", tz=360)
mode = sys.argv[1]
kws = sys.argv[2:]

if mode == "interest":
    pytrends.build_payload(kws, cat=0, timeframe="today 12-m", geo="MX")
    df = pytrends.interest_over_time()
    print(df[kws].mean().sort_values(ascending=False))
    print()
    print(df.tail(8))
elif mode == "related":
    pytrends.build_payload(kws[:1], cat=0, timeframe="today 12-m", geo="MX")
    d = pytrends.related_queries()[kws[0]]
    print("TOP:\n", d["top"])
    print("RISING:\n", d["rising"])
elif mode == "region":
    pytrends.build_payload(kws[:1], cat=0, timeframe="today 12-m", geo="MX")
    reg = pytrends.interest_by_region(resolution="REGION", inc_low_vol=True)
    print(reg.sort_values(kws[0], ascending=False).head(15))
else:
    print(__doc__)
