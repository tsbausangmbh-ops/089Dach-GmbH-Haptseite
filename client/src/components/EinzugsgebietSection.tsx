import { MapPin, Clock, Shield } from "lucide-react";
import { Link } from "wouter";

const stadtteile = [
  { name: "Pasing-Obermenzing", url: "/dachdecker-pasing" },
  { name: "Schwabing", url: "/dachdecker-schwabing" },
  { name: "Bogenhausen", url: "/dachdecker-bogenhausen" },
  { name: "Sendling", url: "/dachdecker-sendling" },
  { name: "Harlaching", url: "/dachdecker-harlaching" },
  { name: "Trudering", url: "/dachdecker-trudering" },
  { name: "Moosach", url: "/dachdecker-moosach" },
  { name: "Nymphenburg", url: "/dachdecker-nymphenburg" },
  { name: "Giesing", url: "/dachdecker-giesing" },
  { name: "Neuhausen", url: "/dachdecker-neuhausen" },
  { name: "Solln", url: "/dachdecker-solln" },
  { name: "Hadern", url: "/dachdecker-hadern" }
];

const umland = [
  { name: "Gräfelfing", url: "/dachdecker-graefelfing" },
  { name: "Ottobrunn", url: "/dachdecker-ottobrunn" },
  { name: "Unterföhring", url: "/dachdecker-unterfoehring" },
  { name: "Pullach", url: "/dachdecker-pullach" },
  { name: "Grünwald", url: "/dachdecker-gruenwald" },
  { name: "Planegg", url: "/dachdecker-planegg" }
];

export default function EinzugsgebietSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-4">
              <MapPin className="w-5 h-5 text-amber-600" />
              <span className="font-medium text-amber-800">Ihr Dachdecker vor Ort</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Unser Einzugsgebiet</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Wir sind in ganz München und dem Münchner Umland für Sie da – schnell, zuverlässig und zu fairen Preisen.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 text-sm font-bold">M</span>
                München Stadtteile
              </h3>
              <div className="flex flex-wrap gap-2">
                {stadtteile.map((s, index) => (
                  <Link key={index} href={s.url}>
                    <span className="inline-block px-3 py-1 bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-800 rounded-full text-sm cursor-pointer transition-colors">
                      {s.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-sm font-bold">U</span>
                Münchner Umland
              </h3>
              <div className="flex flex-wrap gap-2">
                {umland.map((u, index) => (
                  <Link key={index} href={u.url}>
                    <span className="inline-block px-3 py-1 bg-slate-100 hover:bg-green-100 text-slate-700 hover:text-green-800 rounded-full text-sm cursor-pointer transition-colors">
                      {u.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
              <Clock className="w-6 h-6 text-amber-600" />
              <div>
                <p className="font-medium text-slate-800">Schnell vor Ort</p>
                <p className="text-sm text-slate-600">In 30-60 Min. bei Ihnen</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
              <MapPin className="w-6 h-6 text-amber-600" />
              <div>
                <p className="font-medium text-slate-800">Kostenlose Anfahrt</p>
                <p className="text-sm text-slate-600">Im Raum München inkl.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
              <Shield className="w-6 h-6 text-amber-600" />
              <div>
                <p className="font-medium text-slate-800">Lokaler Betrieb</p>
                <p className="text-sm text-slate-600">Seit Jahren in der Region</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
