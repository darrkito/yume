import { CASABLANCA_BRANCHES, type CasablancaBranch } from "@/content/shipping";

// Same branches/addresses (proper nouns, not translated) with English hours.
const HOURS_EN: Record<string, string> = {
  juarez: "Mon-Fri 11am-8pm · Sat 10am-5pm · Sun 11am-3pm",
  aviacion: "Mon-Fri 11am-7pm · Sat 11am-5pm · Sun closed",
  "periferico-norte": "Mon-Fri 11am-8pm · Sat 11am-5pm · Sun closed",
  sur: "Mon-Fri 11am-7pm · Sat 11am-5pm · Sun closed",
  oblatos: "Mon-Fri 11am-7pm · Sat 11am-5pm · Sun closed",
  tetlan: "Mon-Fri 11am-6pm · Sat 11am-5pm · Sun closed",
  tonala: "Mon-Fri 11am-6pm · Sat 11am-5pm · Sun closed",
  "tlaquepaque-parian": "Mon-Fri 11am-6pm · Sat 11am-5pm · Sun closed",
  tlajomulco: "Mon-Fri 11am-6pm · Sat 11am-5pm · Sun closed",
  tesistan: "Mon-Fri 11am-7pm · Sat 11am-5pm · Sun closed",
  "zapopan-centro": "Mon-Fri 11am-7pm · Sat 11am-5pm · Sun closed",
};

export const CASABLANCA_BRANCHES_EN: CasablancaBranch[] = CASABLANCA_BRANCHES.map((b) => ({ ...b, hours: HOURS_EN[b.id] ?? b.hours }));

export const getCasablancaBranchEn = (id: string) => CASABLANCA_BRANCHES_EN.find((b) => b.id === id);
