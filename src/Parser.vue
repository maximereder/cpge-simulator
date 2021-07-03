table: [
          {
            name: "Centrale Supélec",
            barre: this.$data.factor.centrale.native.barre.toString(),
            note: this.averageNative().toString(),
            difference: (this.averageNative()-this.$data.factor.centrale.native.barre).toString(),
          },
          {
            name: "Arts et métiers",
            barre: this.$data.factor.centrale.arts.barre.toString(),
            note: this.averageArts().toString(),
            difference: (this.averageArts()-this.$data.factor.centrale.arts.barre).toString(),
          },
          {
            name: "Esix",
            barre: this.$data.factor.centrale.esix.barre.toString(),
            note: this.averageEsix().toString(),
            difference: (this.averageEsix()-this.$data.factor.centrale.esix.barre).toString(),
          },
          {
            name: "Ismans",
            barre: this.$data.factor.centrale.ismans.barre.toString(),
            note: this.averageIsmans().toString(),
            difference: (this.averageIsmans()-this.$data.factor.centrale.ismans.barre).toString(),
          },
          {
            name: "Estp",
            barre: this.$data.factor.centrale.estp.barre.toString(),
            note: this.averageEstp().toString(),
            difference: (this.averageEstp()-this.$data.factor.centrale.estp.barre).toString(),
          },
          {
            name: "Mine Télécom",
            barre: this.$data.factor.centrale.mine_telecom.toString(),
            note: this.averageMineTelecom().toString(),
            difference: (this.averageMineTelecom()-this.$data.factor.centrale.mine_telecom.barre).toString(),
          },
        ]



        <div class="table"><vs-table>
    <template #thead>
      <vs-tr>
        <vs-th>
          Banque de concours
        </vs-th>
        <vs-th>
          Barre
        </vs-th>
        <vs-th>
          Note
        </vs-th>
        <vs-th>
          Écart
        </vs-th>
      </vs-tr>
    </template>
    <template #tbody>
      <vs-tr
        :key="i"
        v-for="(tr, i) in table"
        :data="tr"
      >
        <vs-td>
          {{ tr.name }}
        </vs-td>
        <vs-td>
         {{ tr.barre }}
        </vs-td>
        <vs-td>
         {{ tr.note }}
        </vs-td>
        <vs-td>
         {{ tr.difference }}
        </vs-td>
      </vs-tr>
    </template>
  </vs-table></div>



  items: [
          /*
          { name: "Centrale Supélec", bar: this.factor.centrale.native.barre, note: this.averageNative(), difference:this.averageNative()-this.factor.centrale.native.barre },
          { name: "Arts et métiers", bar: 'Larsen', note: 'Shaw', difference:'' },
          { name: "Esix", bar: 'Geneva', note: 'Wilson', difference:''},
          { name: "Ismans", bar: 'Jami', note: 'Carney', difference:''},
          { name: "ESTP", bar: 'Jami', note: 'Carney', difference:''},
          { name: "Mine Télécom", bar: 'Jami', note: 'Carney', difference:''}*/

          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ],



        <div>
          <b-table striped hover :items="items"></b-table>
        </div>