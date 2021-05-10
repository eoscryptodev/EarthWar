import { AdventureActService } from './adventure-act.service';
import { AdventureChapterService } from './adventure-chapter.service';
import { AdventurePageService } from './adventure-page.service';
import { AdventureService } from './adventure.service';
// import {  } from '';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
/*
* Adventure Core serves as the root of all adventure composite structures
*  - The AC contains all methods used in single and composite story nodes
*  - AC is called directly inside services for components
* */
export abstract class AdventureCoreService
{
  /*** ADVENTURES ***/
  /*
  * A Composite node for organizing an entire adventure and all of its parts.
  * */
  addAdventure( adventure: AdventureService )
  {
    if ( !adventure )
    {
      throw new Error( "Error: This is not of type Adventure" );
    } else {
      return;
    }
  }

  addAdventureTitle( title: AdventureService )
  {
    if ( !title )
    {
      throw new Error( "Error: Not Adventure Title" );
    } else {
      return;
    }
  }

  addFirstPart( firstPart: AdventureService )
  {
    if ( !firstPart )
    {
      throw new Error( "Error: Not First Part" );
    } else {
      return;
    }
  }

  addPreviousPart( previousPart: AdventureService )
  {
    if ( !previousPart )
    {
      throw new Error( "Error: Not Previous Part" );
    } else {
      return;
    }
  }

  addCurrentPart( currentPart: AdventureService )
  {
    if ( !currentPart )
    {
      throw new Error( "Error: Not Current Part" );
    } else {
      return;
    }
  }

  addNextPart( nextPart: AdventureService )
  {
    if ( !nextPart )
    {
      throw new Error( "Error: Not Next Part" );
    } else {
      return;
    }
  }

  addLastPart( lastPart: AdventureService )
  {
    if ( !lastPart )
    {
      throw new Error( "Error: Not Last Part" );
    } else {
      return;
    }
  }



  /*** ADVENTURES ACTS ***/
  /*
  * A Composite node for organizing the adventure that contains adventure chapters
  * */
  addAct( adventureAct: AdventureActService )
  {
    if ( !adventureAct )
    {
      throw new Error( "Error: This is not of type Adventure Act" );
    } else {
      return;
    }
  }

  addFirstChapter( firstChapter: AdventureActService )
  {
    if ( !firstChapter )
    {
      throw new Error( "Error: Not First Chapter" );
    } else {
      return;
    }
  }

  addPreviousChapter( previousChapter: AdventureActService )
  {
    if ( !previousChapter )
    {
      throw new Error( "Error: Not Previous Act" );
    } else {
      return;
    }
  }

  addCurrentChapter( currentChapter: AdventureActService )
  {
    if ( !currentChapter )
    {
      throw new Error( "Error: Not Current Chapter" );
    } else {
      return;
    }
  }

  addNextChapter( nextChapter: AdventureActService )
  {
    if ( !nextChapter )
    {
      throw new Error( "Error: Not Next Chapter" );
    } else {
      return;
    }
  }

  addLastChapter( lastChapter: AdventureActService )
  {
    if ( !lastChapter )
    {
      throw new Error( "Error: Not Last Chapter" );
    } else {
      return;
    }
  }


  /*** ADVENTURE CHAPTERS ***/
  /*
  * A Composite node for organizing the adventure that contains adventure pages
  * */
  addChapter( adventureChapter: AdventureChapterService )
  {
    if ( !adventureChapter )
    {
      throw new Error( "Error: This is not of type Adventure Chapter" );
    } else {
      return;
    }
  }

  addChapterTitle( chapterTitle: AdventureChapterService )
  {
    if ( !chapterTitle )
    {
      throw new Error( "Error: Not a Chapter Title" );
    } else {
      return;
    }
  }

  addFirstPage( firstPage: AdventureChapterService )
  {
    if ( !firstPage )
    {
      throw new Error( "Error: Not a Page" );
    } else {
      return;
    }
  }

  addPreviousPage( previousPage: AdventureChapterService )
  {
    if ( !previousPage ) {
      throw new Error( "Error: Not a Page" );
    } else {
      return;
    }
  }

  addCurrentPage( currentPage: AdventureChapterService )
  {
    if ( !currentPage ) {
      throw new Error( "Error: Not a Page" );
    } else {
      return;
    }
  }

  addNextPage( nextPage: AdventureChapterService )
  {
    if ( !nextPage ) {
      throw new Error( "Error: Not a Page" );
    } else {
      return;
    }
  }

  addLastPage( currentPage: AdventureChapterService )
  {
    if ( !currentPage ) {
      throw new Error( "Error: Not a Page" );
    } else {
      return;
    }
  }


  /*** ADVENTURE PAGES - NORMAL AND SPECIAL ***/
  /*
  * A Composite page node that contains either
  *  - hidden or locked page nodes
  *  - hallways
  * */
  addSpecialPage( specialPage: AdventurePageService )
  {
    if ( !specialPage )
    {
      throw new Error( "Error: This is not of type Adventure Page" );
    } else {
      return;
    }
  }
  /*
  * A Single Page node that leads to no others. The lowest point
  * on the tree signifying
  *  - dead ends
  *  - rooms without connecting rooms
  * */
  addPage( adventurePage: AdventurePageService )
  {
    if ( !adventurePage )
    {
      throw new Error( "Error: This is not of type Adventure Page" );
    } else {
      return;
    }
  }

  // Specific Story Page Methods
  // Whether for a Special Page or a Normal Page

  getPageName()
  {
    throw new Error( "Error With Page Name" );
  }

  getPageLocation()
  {
    throw new Error( "Error with Page Location" );
  }

  getPageCharacters()
  {
    throw new Error( "Error with Page Characters" );
  }

  getPageText()
  {
    throw new Error( "Error with Page Text" );
  }

  getPageDescriptors()
  {
    throw new Error( "Error with Page Descriptors" );
  }

  getPageDecisions()
  {
    throw new Error( "Error with Page Decisions" );
  }

  getPageItems()
  {
    throw new Error( "Error with Page Items" );
  }

  getPageEnemies()
  {
    throw new Error( "Error with Page Enemies" );
  }
}
