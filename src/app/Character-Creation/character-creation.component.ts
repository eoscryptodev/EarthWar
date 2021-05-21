import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CharacterHistory } from '../Shared/models/history.service'
import { ArmorBuilderService } from '../Core/Services/armorBuilder.service';
import { WeaponBuilderService } from '../Core/Services/weaponBuilder.service';
import { CharacterCreationService } from './character-creation.service';
import { MatDialog } from '@angular/material/dialog';
import { CharacterCreationHandler } from '../Core/State Management/Handler States/character-creation-handler.state';
import { HistoryDialogComponent } from "./dialogs/history-dialog.component";
import { ClassDialogComponent } from './dialogs/class-dialog/class-dialog.component';
import { SpeciesDialogComponent } from './dialogs/species-dialog/species-dialog.component';
import { HomeworldDialogComponent } from './dialogs/homeworld-dialog/homeworld-dialog.component';


@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.scss']
})
export class CharacterCreationComponent implements OnInit
{
  fameSelected: string = '';
  armorSelected: string = '';
  weaponSelected: string = '';
  chosenType: string = '';
  characterState = new CharacterCreationHandler();

  // MAIN
  private characterName: string = '';
  classes: any[] = ['Mechanaut', 'Void Walker', 'Officer', 'Assassin', 'Rogue'];
  histories: any[] = ['Space Explorer', 'Scientist', 'Soldier', 'Hacker', 'Pirate'];
  species: any[] = ['Human', 'Solanan', 'Android', 'Kitolan', 'Broman'];
  homeworld: any[] = ['Earth', 'The Moon', 'Mars,', 'Martian One', 'Solana', 'The Kitolan World Ship'];
  gender: any[] = ['Male', 'Female'];
  archetype: string = 'Choose and Character History and Class';
  // SKILLS
  private acrobatics = 0;
  private athletics = 0;
  private clandestine = 0;
  private computers = 0;
  private disguise = 0;
  private engineering = 0;
  private intimidate = 0;
  private intuition = 0;
  private lifeScience = 0;
  private medicine = 0;
  private mysticism = 0;
  private piloting = 0;
  private stealth = 0;
  // ABILITIES
  private might = 0;
  private mightMod = 0;
  private agility = 0;
  private agilityMod = 0;
  private lifeForce = 0;
  private lifeForceMod = 0;
  private intelligence = 0;
  private intelligenceMod = 0;
  private wisdom = 0;
  private wisdomMod = 0;
  private charisma = 0;
  private charismaMod = 0;
  private spirit = 0;
  private spiritMod = 0;
  private seduction = 0;
  private seductionMod = 0;
  private leadership = 0;
  private leadershipMod = 0;
  // HEALTH AND RESOLVE
  private currentStamina = 0;
  private totalStamina = 0;
  private currentHealth = 0;
  private totalHealth = 0;
  private currentResolve = 0;
  private totalResolve = 0;
  // SAVING THROWS
  private fortitude = 0;
  private reflex = 0;
  private will = 0;
  // FAME
  private fameControl = FormControl;
  // ARMOR
  private armorControl = FormControl;
  private weaponControl = FormControl;

  public active = false;
  submitted = false

  constructor(
    private characterFame: CharacterHistory,
    private armor: ArmorBuilderService,
    private weapon: WeaponBuilderService,
    private update: CharacterCreationService,
    public dialog: MatDialog)
  {
  }

  ngOnInit(): void
  {
    this.characterState.creation();
    console.log( 'Character Creation component loaded' );
  }

  openHistoryDialog(): void
  {
    const dialogRef = this.dialog.open( HistoryDialogComponent );
    dialogRef.afterClosed().subscribe( result => {
      console.log(`Dialog result: ${result}`);
    })
  }

  openClassDialog(): void
  {
    const dialogRef = this.dialog.open( ClassDialogComponent );
    dialogRef.afterClosed().subscribe( result => {
      console.log(`Dialog result: ${result}`);
    })
  }

  openSpeciesDialog(): void
  {
    const dialogRef = this.dialog.open( SpeciesDialogComponent );
    dialogRef.afterClosed().subscribe( result => {
      console.log(`Dialog result: ${result}`);
    })
  }

  openHomeworldDialog(): void
  {
    const dialogRef = this.dialog.open( HomeworldDialogComponent );
    dialogRef.afterClosed().subscribe( result => {
      console.log(`Dialog result: ${result}`);
    })
  }

  chosenArchetype( controlOne: FormGroup, controlTwo: FormGroup ): string
  {
    const optionOne = controlOne.get('classes').value;
    const optionTwo = controlTwo.get('histories').value;

    if ( optionOne === 'Assassin' && optionTwo === 'Space Explorer' )
    {
      this.chosenType = 'The Hunter Seeker';
      console.log( this.chosenType );

    } else if ( optionOne === 'Mechanaut' && optionTwo === 'Space Explorer' )
    {
      this.chosenType = 'The Behemoth';
      console.log( this.chosenType );

    } else if ( optionOne === 'Void Walker' && optionTwo === 'Space Explorer' )
    {
      this.chosenType = 'The Arcanist';
      console.log( this.chosenType );

    } else if ( optionOne === 'Officer' && optionTwo === 'Space Explorer' )
    {
      this.chosenType = 'The Scout Commander';
      console.log( this.chosenType );

    } else if ( optionOne === 'Rogue' && optionTwo === 'Space Explorer' )
    {
      this.chosenType = 'The Trickster';
      console.log( this.chosenType );

    } else if ( optionOne === 'Assassin' && optionTwo === 'Scientist' )
    {
      this.chosenType = 'The Dark Engineer';
      console.log( this.chosenType );

    } else if ( optionOne === 'Mechanaut' && optionTwo === 'Scientist' )
    {
      this.chosenType = 'The Colossus';
      console.log( this.chosenType );

    } else if ( optionOne === 'Void Walker' && optionTwo === 'Scientist' )
    {
      this.chosenType = 'The Tech Mystic';
      console.log( this.chosenType );

    } else if ( optionOne === 'Officer' && optionTwo === 'Scientist' )
    {
      this.chosenType = 'The Medic';
      console.log( this.chosenType );

    } else if ( optionOne === 'Rogue' && optionTwo === 'Scientist' )
    {
      this.chosenType = 'The Scoundrel Lord';
      console.log( this.chosenType );

    } else if ( optionOne === 'Assassin' && optionTwo === 'Soldier' )
    {
      this.chosenType = 'The Sniper';
      console.log( this.chosenType );

    } else if ( optionOne === 'Mechanaut' && optionTwo === 'Soldier' )
    {
      this.chosenType = 'The Arc Titan';
      console.log( this.chosenType );

    } else if ( optionOne === 'Void Walker' && optionTwo === 'Soldier' )
    {
      this.chosenType = 'The Psionic Knight';
      console.log( this.chosenType );

    } else if ( optionOne === 'Officer' && optionTwo === 'Soldier' )
    {
      this.chosenType = 'The General';
      console.log( this.chosenType );

    } else if ( optionOne === 'Rogue' && optionTwo === 'Soldier' )
    {
      this.chosenType = 'The Trained Mercenary';
      console.log( this.chosenType );

    } else if ( optionOne === 'Void Walker' && optionTwo === 'Hacker' )
    {
      this.chosenType = 'The Reality Hacker';
      console.log( this.chosenType );

    } else if ( optionOne === 'Mechanaut' && optionTwo === 'Hacker' )
    {
      this.chosenType = 'The Firewall';
      console.log( this.chosenType );

    } else if ( optionOne === 'Officer' && optionTwo === 'Hacker' )
    {
      this.chosenType = 'The Grey Hat';
      console.log( this.chosenType );

    } else if ( optionOne === 'Assassin' && optionTwo === 'Hacker' )
    {
      this.chosenType = 'The Shadow Walker';
      console.log( this.chosenType );

    } else if ( optionOne === 'Rogue' && optionTwo === 'Hacker' )
    {
      this.chosenType = 'The Rebel';
      console.log( this.chosenType );

    } else if ( optionOne === 'Mechanaut' && optionTwo === 'Pirate' )
    {
      this.chosenType = 'The Marauder';
      console.log( this.chosenType );

    } else if ( optionOne === 'Void Walker' && optionTwo === 'Pirate' )
    {
      this.chosenType = 'The Nexus Raider';
      console.log( this.chosenType );

    } else if ( optionOne === 'Officer' && optionTwo === 'Pirate' )
    {
      this.chosenType = 'The Corsair';
      console.log( this.chosenType );

    } else if ( optionOne === 'Assassin' && optionTwo === 'Pirate' )
    {
      this.chosenType = 'The Blood Thief';
      console.log( this.chosenType );

    } else if ( optionOne === 'Rogue' && optionTwo === 'Pirate' )
    {
      this.chosenType = 'The Liberator';
      console.log( this.chosenType );
    }
    return `You chose ${this.chosenType} as your archetype`
  }

  chosenSpaceFame(): string
  {
    console.log('Space fame selected');
    return this.characterFame.getSpaceExplorerFame();
  }

  chosenScientistFame(): string
  {
    console.log('Scientist fame selected');
    return this.characterFame.getScientistFame();
  }

  chosenSoldierFame(): string
  {
    return this.characterFame.getSoldierFame();
  }

  chosenHackerFame(): string
  {
    return this.characterFame.getHackerFame();
  }

  chosenPirateFame(): string
  {
    return this.characterFame.getPirateFame();
  }

  chosenLightArmor(): string
  {
    return this.armor.getMartianLeather();
  }

  chosenWeapon(): string
  {
    return this.weapon.getSolananPistol();
  }

  submissionText(): string
  {
    return 'A new era has arrived! Over a thousand light years of Free Space promises countless ' +
      'adventures for the brave and foolish. Treasures beyond your wildest dreams, uncharted worlds, ' +
      'rare resources and the most fearless beings this side of the Milky Way Galaxy. It is time for you to ' +
      'change the course of history.'
  }

  classUpdate( event ): void
  {
    if ( this.characterForm.get('classes').value === 'Officer' )
    {
      this.abilitiesForm.get('leadership').patchValue(9, { onlySelf: false });
      this.abilitiesForm.get('intelligence').patchValue(8, { onlySelf: false });
      this.abilitiesForm.get('wisdom').patchValue(7, { onlySelf: false });
      this.abilitiesForm.get('lifeForce').patchValue(6, { onlySelf: false });
      this.abilitiesForm.get('might').patchValue(4, { onlySelf: false });
      this.abilitiesForm.get('agility').patchValue(4, { onlySelf: false });
      this.abilitiesForm.get('charisma').patchValue(3, { onlySelf: false });
      this.abilitiesForm.get('spirit').patchValue(3, { onlySelf: false });
      this.abilitiesForm.get('seduction').patchValue(2, { onlySelf: false });
      this.savingThrowsForm.get('will').patchValue(7, { onlySelf: false });
      this.savingThrowsForm.get('fortitude').patchValue(8, { onlySelf: false });
      this.savingThrowsForm.get('reflex').patchValue(4, { onlySelf: false });

    } else if ( this.characterForm.get('classes').value === 'Void Walker' )
    {
      this.abilitiesForm.get('spirit').patchValue(10, { onlySelf: false });
      this.abilitiesForm.get('lifeForce').patchValue(8, { onlySelf: false });
      this.abilitiesForm.get('intelligence').patchValue(7, { onlySelf: false });
      this.abilitiesForm.get('might').patchValue(6, { onlySelf: false });
      this.abilitiesForm.get('wisdom').patchValue(5, { onlySelf: false });
      this.abilitiesForm.get('agility').patchValue(5, { onlySelf: false });
      this.abilitiesForm.get('seduction').patchValue(4, { onlySelf: false });
      this.abilitiesForm.get('charisma').patchValue(3, { onlySelf: false });
      this.abilitiesForm.get('leadership').patchValue(3, { onlySelf: false });
      this.savingThrowsForm.get('will').patchValue(8, { onlySelf: false });
      this.savingThrowsForm.get('fortitude').patchValue(5, { onlySelf: false });
      this.savingThrowsForm.get('reflex').patchValue(6, { onlySelf: false });

    } else if ( this.characterForm.get('classes').value === 'Mechanaut' )
    {
      this.abilitiesForm.get('might').patchValue(11, { onlySelf: false });
      this.abilitiesForm.get('lifeForce').patchValue(7, { onlySelf: false });
      this.abilitiesForm.get('leadership').patchValue(7, { onlySelf: false });
      this.abilitiesForm.get('intelligence').patchValue(6, { onlySelf: false });
      this.abilitiesForm.get('wisdom').patchValue(6, { onlySelf: false });
      this.abilitiesForm.get('agility').patchValue(5, { onlySelf: false });
      this.abilitiesForm.get('spirit').patchValue(4, { onlySelf: false });
      this.abilitiesForm.get('charisma').patchValue(4, { onlySelf: false });
      this.abilitiesForm.get('seduction').patchValue(3, { onlySelf: false });
      this.savingThrowsForm.get('will').patchValue(5, { onlySelf: false });
      this.savingThrowsForm.get('fortitude').patchValue(9, { onlySelf: false });
      this.savingThrowsForm.get('reflex').patchValue(6, { onlySelf: false });

    } else if ( this.characterForm.get('classes').value === 'Assassin' )
    {
      this.abilitiesForm.get('agility').patchValue(9, { onlySelf: false });
      this.abilitiesForm.get('charisma').patchValue(7, { onlySelf: false });
      this.abilitiesForm.get('wisdom').patchValue(6, { onlySelf: false });
      this.abilitiesForm.get('might').patchValue(6, { onlySelf: false });
      this.abilitiesForm.get('intelligence').patchValue(5, { onlySelf: false });
      this.abilitiesForm.get('lifeForce').patchValue(5, { onlySelf: false });
      this.abilitiesForm.get('seduction').patchValue(5, { onlySelf: false });
      this.abilitiesForm.get('leadership').patchValue(4, { onlySelf: false });
      this.abilitiesForm.get('spirit').patchValue(3, { onlySelf: false });
      this.savingThrowsForm.get('will').patchValue(7, { onlySelf: false });
      this.savingThrowsForm.get('fortitude').patchValue(6, { onlySelf: false });
      this.savingThrowsForm.get('reflex').patchValue(9, { onlySelf: false });

    } else if ( this.characterForm.get('classes').value === 'Rogue' )
    {
      this.abilitiesForm.get('charisma').patchValue(10, { onlySelf: false });
      this.abilitiesForm.get('lifeForce').patchValue(9, { onlySelf: false });
      this.abilitiesForm.get('seduction').patchValue(8, { onlySelf: false });
      this.abilitiesForm.get('agility').patchValue(7, { onlySelf: false });
      this.abilitiesForm.get('intelligence').patchValue(6, { onlySelf: false });
      this.abilitiesForm.get('wisdom').patchValue(5, { onlySelf: false });
      this.abilitiesForm.get('might').patchValue(4, { onlySelf: false });
      this.abilitiesForm.get('spirit').patchValue(4, { onlySelf: false });
      this.abilitiesForm.get('leadership').patchValue(3, { onlySelf: false });
      this.savingThrowsForm.get('will').patchValue(6, { onlySelf: false });
      this.savingThrowsForm.get('fortitude').patchValue(8, { onlySelf: false });
      this.savingThrowsForm.get('reflex').patchValue(6, { onlySelf: false });

    }
    console.log(event.value);
  }

  speciesUpdate( event ): void
  {
    if ( this.characterForm.get( 'species' ).value === 'Human' )
    {
      this.healthResolveForm.get('totalHealth').patchValue( 5, { onlySelf: false });
      this.healthResolveForm.get('totalStamina').patchValue( 5, { onlySelf: false });
      this.healthResolveForm.get('totalResolve').patchValue( 6, { onlySelf: false });

    } else if ( this.characterForm.get( 'species' ).value === 'Solanan' )
    {
      this.healthResolveForm.get('totalHealth').patchValue( 6, { onlySelf: false });
      this.healthResolveForm.get('totalStamina').patchValue( 6, { onlySelf: false });
      this.healthResolveForm.get('totalResolve').patchValue( 5, { onlySelf: false });

    } else if ( this.characterForm.get( 'species' ).value === 'Android' )
    {
      this.healthResolveForm.get('totalHealth').patchValue( 7, { onlySelf: false });
      this.healthResolveForm.get('totalStamina').patchValue( 7, { onlySelf: false });
      this.healthResolveForm.get('totalResolve').patchValue( 5, { onlySelf: false });

    } else if ( this.characterForm.get( 'species' ).value === 'Kitolan' )
    {
      this.healthResolveForm.get('totalHealth').patchValue( 7, { onlySelf: false });
      this.healthResolveForm.get('totalStamina').patchValue( 6, { onlySelf: false });
      this.healthResolveForm.get('totalResolve').patchValue( 5, { onlySelf: false });
    } else if ( this.characterForm.get( 'species' ).value === 'Broman' )
    {
      this.healthResolveForm.get('totalHealth').patchValue( 6, { onlySelf: false });
      this.healthResolveForm.get('totalStamina').patchValue( 5, { onlySelf: false });
      this.healthResolveForm.get('totalResolve').patchValue( 7, { onlySelf: false });
    }
    console.log(event);
  }

  historyUpdate ( event ): void
  {
    if ( this.characterForm.get( 'histories' ).value === 'Space Explorer' )
    {
      this.skillsForm.get('computers').patchValue( 9, { onlySelf: false });
      this.skillsForm.get('intuition').patchValue( 7, { onlySelf: false });
      this.skillsForm.get('athletics').patchValue( 5, { onlySelf: false });

    } else if ( this.characterForm.get( 'histories' ).value === 'Soldier' )
    {
      this.skillsForm.get('intimidate').patchValue( 10, { onlySelf: false });
      this.skillsForm.get('medicine').patchValue( 7, { onlySelf: false });
      this.skillsForm.get('piloting').patchValue( 7, { onlySelf: false });

    } else if ( this.characterForm.get( 'histories' ).value === 'Scientist' )
    {
      this.skillsForm.get('engineering').patchValue( 10, { onlySelf: false });
      this.skillsForm.get('computers').patchValue( 8, { onlySelf: false });
      this.skillsForm.get('lifeScience').patchValue( 7, { onlySelf: false });
      this.skillsForm.get('medicine').patchValue( 6, { onlySelf: false });

    } else if ( this.characterForm.get( 'histories' ).value === 'Hacker' )
    {
      this.skillsForm.get('computers').patchValue( 11, { onlySelf: false });
      this.skillsForm.get('stealth').patchValue( 8, { onlySelf: false });
      this.skillsForm.get('disguise').patchValue( 7, { onlySelf: false });

    } else if ( this.characterForm.get( 'histories' ).value === 'Pirate' )
    {
      this.skillsForm.get('intimidate').patchValue( 9, { onlySelf: false });
      this.skillsForm.get('clandestine').patchValue( 6, { onlySelf: false });
      this.skillsForm.get('mysticism').patchValue( 7, { onlySelf: false });
    }
    console.log( event )
  }

  submitForm(): boolean
  {
    this.submitted = true;
    if( this.finalForm.valid )
    {
      alert('Please fill out all required form fields!');
      return false;
    } else {
      console.log( this.finalForm.value );
    }
  }

  characterForm = new FormGroup({
      name: new FormControl( this.characterName, Validators.required ),
      classes: new FormControl( this.classes, Validators.required,  [
        //this.update.asyncArchetypeValidator()
      ]),
      histories: new FormControl( this.histories, Validators.required,  [
        //this.update.asyncArchetypeValidator()
      ]),
      species: new FormControl( this.species, Validators.required ),
      homeworld: new FormControl( this.homeworld, Validators.required ),
      gender: new FormControl( this.gender, Validators.required ),
      archetype: new FormControl( this.archetype, Validators.required, [
        //this.update.asyncArchetypeValidator()
      ])
  }, {
    //validators: [this.update.archetypeValidator()], // working validator
  });

  abilitiesForm = new FormGroup({
      might: new FormControl( this.might, Validators.required ),
      mightMod: new FormControl( this.mightMod, Validators.required ),
      agility: new FormControl( this.agility, Validators.required ),
      agilityMod: new FormControl( this.agilityMod, Validators.required ),
      lifeForce: new FormControl( this.lifeForce, Validators.required ),
      lifeForceMod: new FormControl( this.lifeForceMod, Validators.required ),
      intelligence: new FormControl( this.intelligence, Validators.required ),
      intelligenceMod: new FormControl( this.intelligenceMod, Validators.required ),
      wisdom: new FormControl( this.wisdom, Validators.required ),
      wisdomMod: new FormControl( this.wisdomMod, Validators.required ),
      charisma: new FormControl( this.charisma, Validators.required ),
      charismaMod: new FormControl( this.charismaMod, Validators.required ),
      spirit: new FormControl( this.spirit, Validators.required ),
      spiritMod: new FormControl( this.spiritMod, Validators.required ),
      seduction: new FormControl( this.seduction, Validators.required ),
      seductionMod: new FormControl( this.seductionMod, Validators.required ),
      leadership: new FormControl( this.leadership, Validators.required ),
      leadershipMod: new FormControl( this.leadershipMod, Validators.required ),
  });

  skillsForm = new FormGroup({
      acrobatics: new FormControl( this.acrobatics ),
      athletics: new FormControl( this.athletics ),
      computers: new FormControl( this.computers ),
      clandestine: new FormControl( this.clandestine ),
      disguise: new FormControl( this.disguise ),
      engineering: new FormControl( this.engineering ),
      intimidate: new FormControl( this.intimidate ),
      intuition: new FormControl( this.intuition ),
      lifeScience: new FormControl( this.lifeScience ),
      medicine: new FormControl( this.medicine ),
      mysticism: new FormControl( this.mysticism ),
      piloting: new FormControl( this.piloting ),
      stealth: new FormControl( this.stealth ),
  });

  healthResolveForm = new FormGroup({
    currentStamina: new FormControl( this.currentStamina, Validators.required ),
    totalStamina: new FormControl( this.totalStamina, Validators.required ),
    currentHealth: new FormControl( this.currentHealth, Validators.required ),
    totalHealth: new FormControl( this.totalHealth, Validators.required ),
    currentResolve: new FormControl( this.currentResolve, Validators.required ),
    totalResolve: new FormControl( this.totalResolve, Validators.required )
  })

  savingThrowsForm = new FormGroup({
    fortitude: new FormControl( this.fortitude, Validators.required ),
    will: new FormControl( this.will, Validators.required ),
    reflex: new FormControl( this.reflex, Validators.required )
  });

  armorForm = new FormGroup({
    armor: new FormControl( this.armorControl, Validators.required ),
    weapon: new FormControl( this.weaponControl, Validators.required )
  });

  fameForm = new FormGroup({
    fame: new FormControl( this.fameControl, Validators.required )
  })

  finalForm = new FormGroup({
    mainSection: new FormControl(this.characterForm),
    abilitiesSection: new FormControl(this.abilitiesForm),
    skillsSection: new FormControl(this.skillsForm),
    fameSection: new FormControl(this.fameForm)
  })

}

