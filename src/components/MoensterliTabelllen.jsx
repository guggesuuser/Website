export default function MoensterliTabelllen() {
  return (
    <>
      <img
        src={`${
          import.meta.env.BASE_URL
        }titelbilder/Moensterli_Vikings_schriftFett_2026.png`}
        alt="Flyer"
        className="w-full h-auto rounded drop-shadow-custom-lg mb-10"
      />
      ;{/* Umzug Start */}
      <div className="mt-10 mb-20">
        <p className="mt-12 mb-4 text-xl sm:text-2xl font-semibold">
          AUFSTELLUNG UMZUG
        </p>
        <div className="overflow-x-auto rounded-lg border border-qui/20 shadow-xl">
          <table className="w-full text-sm text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-pri text-qua">
                {/* Fixierte Spalte für die Position */}
                <th className="p-4 border border-qua/10 sticky left-0 bg-pri z-20 w-20 text-center font-bold shadow-[2px_0_5px_-2px_rgba(0,0,0,0.3)]">
                  Pos.
                </th>
                <th className="p-4 border border-qua/10 text-lg">
                  Guggenmusik
                </th>
                <th className="p-4 border border-qua/10 text-lg">Herkunft</th>
              </tr>
            </thead>
            <tbody className="bg-qua text-textd">
              {[
                { pos: 1, name: "Guggesuuser", ort: "Berneck" },
                { pos: 2, name: "Tüüfelshusare Wil", ort: "Wil" },
                {
                  pos: 3,
                  name: "Albis Chroser Langnau am Albis",
                  ort: "Langnau am Albis",
                },
                { pos: 4, name: "Räbä-Forzer Thal", ort: "Thal" },
                {
                  pos: 5,
                  name: "Guggemusig Izi bizi tini wini",
                  ort: "Herisau",
                },
                { pos: 6, name: "Spyycher Chaosknaller", ort: "Speicher" },
                {
                  pos: 7,
                  name: "Lutere Gugger Obertoggenburg / Gämselibögg Gams",
                  ort: "Obertoggenburg / Gams",
                },
                { pos: 8, name: "Röräheizär Rorschach", ort: "Rorschach" },
                {
                  pos: 9,
                  name: "Mehrzweckblaari Waldstatt",
                  ort: "Waldstatt",
                },
                { pos: 10, name: "Öpfel-Chlöpfer Muolen", ort: "Muolen" },
              ].map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-ter/20 hover:bg-ter/5 transition-colors"
                >
                  <td className="p-3 font-bold bg-[#f3f0e9] text-pri sticky left-0 z-10 text-center shadow-[2px_0_5px_-2px_rgba(0,0,0,0.3)]">
                    {item.pos}.
                  </td>
                  <td className="p-3 font-semibold text-base px-6">
                    {item.name}
                  </td>
                  <td className="p-3 text-ter italic">{item.ort}</td>
                </tr>
              ))}
              {/* Footer für den Umzugsstart */}
              <tr className="text-qui font-bold">
                <th
                  colSpan="3"
                  className="py-4 px-4 text-lg text-left sticky left-0 z-20 bg-sec italic"
                >
                  Start Umzug: 18:37 Uhr
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      ;{/* --- SPIELPLAN TABELLE START --- */}
      <div className="mt-10 mb-20">
        <p className="mt-12 mb-4 text-xl sm:text-2xl font-semibold">
          SPIELPLAN
        </p>
        <div className="overflow-x-auto rounded-lg border border-qui/20 shadow-xl">
          <table className="w-full text-sm text-center border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-sec text-qui font-bold">
                <th
                  colSpan="12"
                  className="py-3 px-4 text-lg text-left sticky left-0"
                >
                  Umzug 18:37
                </th>
              </tr>
              <tr className="bg-pri text-textl">
                <th className="p-3 border border-qua/10 bg-pri sticky left-0 z-20">
                  Zeit
                </th>
                <th className="p-3 border border-qua/10">Tüüfelshusare Wil</th>
                <th className="p-3 border border-qua/10">Izi bizi Herisau</th>
                <th className="p-3 border border-qua/10">Räbä-Forzer Thal</th>
                <th className="p-3 border border-qua/10">Mehrzweckblaari</th>
                <th className="p-3 border border-qua/10">Albis Chroser</th>
                <th className="p-3 border border-qua/10">Chaosknaller</th>
                <th className="p-3 border border-qua/10">Lutere / Gämseli</th>
                <th className="p-3 border border-qua/10">Röräheizär</th>
                <th className="p-3 border border-qua/10">Gitzifääger</th>
                <th className="p-3 border border-qua/10">Räbafäger</th>
                <th className="p-3 border border-qua/10">Öpfel-Chlöpfer</th>
              </tr>
            </thead>
            <tbody className="bg-qua text-textd">
              {/* Zeile 1 */}
              <tr className="border-b border-ter/20">
                <td className="p-2 font-bold bg-textl sticky left-0 z-20">
                  19:30-19:50
                </td>
                <td></td>
                <td className="bg-sen text-qua p-2">Rathaus</td>
                <td className="bg-hui p-2">Lindehuskeller</td>
                <td className="bg-sec p-2">3-König</td>
                <td className="bg-pri text-qua p-2">Werkhof</td>
                <td></td>
                <td className="border border-pri text-pri font-semibold">
                  il Vento
                </td>
                <td className="bg-ter text-qua p-2">WGB</td>
                <td></td>
                <td></td>
                <td className="bg-hui/30 p-2">Haus des Weines</td>
              </tr>
              {/* Zeile 2 */}
              <tr className="border-b border-ter/20">
                <td className="p-2 font-bold bg-textl sticky left-0 z-20">
                  20:00-20:20
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="italic font-bold text-sen underline">
                  Schnapslirundi Rathaus
                </td>
                <td className="italic font-bold text-sen underline">
                  Schnapslirundi Felsenbar
                </td>
                <td className="bg-sen text-qua p-2">Rathaus</td>
                <td></td>
                <td></td>
              </tr>
              {/* Zeile 3 */}
              <tr className="border-b border-ter/20">
                <td className="p-2 font-bold bg-textl sticky left-0 z-20">
                  20:30-20:50
                </td>
                <td className="bg-hui p-2">Lindehuskeller</td>
                <td className="border border-pri text-pri font-semibold">
                  il Vento
                </td>
                <td className="bg-hui/30 p-2">Haus des Weines</td>
                <td className="bg-sen text-qua p-2">Rathaus</td>
                <td className="bg-ter text-qua p-2">WGB</td>
                <td className="bg-pri text-qua p-2">Werkhof</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="bg-sec p-2">3-König</td>
              </tr>
              {/* Zeile 4 */}
              <tr className="border-b border-ter/20">
                <td className="p-2 font-bold bg-textl sticky left-0 z-20">
                  21:00-21:20
                </td>
                <td></td>
                <td className="italic font-bold text-sen underline">
                  Schnapslirundi Werkhof
                </td>
                <td className="italic font-bold text-sen underline">
                  Schnapslirundi Felsenbar
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="bg-sen text-qua p-2">Rathaus</td>
                <td></td>
                <td></td>
                <td className="italic font-bold text-sen underline">
                  Schnapslirundi Rathaus
                </td>
              </tr>
              {/* Zeile 5 */}
              <tr className="border-b border-ter/20">
                <td className="p-2 font-bold bg-textl sticky left-0 z-20">
                  21:30-21:50
                </td>
                <td className="bg-sec p-2">3-König</td>
                <td></td>
                <td></td>
                <td className="border border-pri text-pri font-semibold">
                  il Vento
                </td>
                <td className="bg-sen text-qua p-2">Rathaus</td>
                <td className="bg-hui/30 p-2">Haus des Weines</td>
                <td className="bg-pri text-qua p-2">Werkhof</td>
                <td></td>
                <td className="bg-hui p-2">Lindehuskeller</td>
                <td className="bg-ter text-qua p-2">WGB</td>
                <td></td>
              </tr>
              {/* Zeile 6 */}
              <tr className="border-b border-ter/20">
                <td className="p-2 font-bold bg-textl sticky left-0 z-20">
                  22:00-22:20
                </td>
                <td></td>
                <td></td>
                <td className="bg-sen text-qua p-2">Rathaus</td>
                <td className="italic font-bold text-sen underline">
                  Schnapslirundi Rathaus
                </td>
                <td className="italic font-bold text-sen underline">
                  Schnapslirundi Felsenbar
                </td>
                <td className="italic font-bold text-sen underline">
                  Schnapslirundi Werkhof
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              {/* Zeile 7 */}
              <tr className="border-b border-ter/20">
                <td className="p-2 font-bold bg-textl sticky left-0 z-20">
                  22:30-22:50
                </td>
                <td className="bg-sen text-qua p-2">Rathaus</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="bg-ter text-qua p-2">WGB</td>
                <td className="bg-pri text-qua p-2">Werkhof</td>
                <td></td>
              </tr>
              {/* Zeile 8 */}
              <tr className="border-b border-ter/20">
                <td className="p-2 font-bold bg-textl sticky left-0 z-20">
                  23:00-23:20
                </td>
                <td className="italic font-bold text-sen underline">
                  Schnapslirundi Rathaus
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="bg-sen text-qua p-2">Rathaus</td>
                <td></td>
                <td className="italic font-bold text-sen underline">
                  Schnapslirundi Felsenbar
                </td>
                <td className="italic font-bold text-sen underline">
                  Schnapslirundi Werkhof
                </td>
                <td></td>
              </tr>
              {/* Zeile 9 */}
              <tr className="border-b border-ter/20">
                <td className="p-2 font-bold bg-textl sticky left-0 z-20">
                  23:30-23:50
                </td>
                <td></td>
                <td className="bg-pri text-qua p-2">Werkhof</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="bg-sen text-qua p-2">Rathaus</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              {/* Monsterkonzert Footer */}
              <tr className="bg-sec text-qui font-bold">
                <th
                  colSpan="12"
                  className="py-3 px-3 text-lg text-left sticky left-0 z-20"
                >
                  Monsterkonzert 00:30
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <img
          src={`${import.meta.env.BASE_URL}titelbilder/Bierdeckel_1.svg`}
          alt="Flyer"
          className="w-full h-auto rounded drop-shadow-custom-lg mb-10"
        />
      </div>
      ;{/* --- SPIELPLAN TABELLE ENDE --- */}
    </>
  );
}
