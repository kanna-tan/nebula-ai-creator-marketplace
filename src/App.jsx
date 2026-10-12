import React, { useState } from 'react';
import BackgroundGalaxy from './components/BackgroundGalaxy';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import CreatorDirectory from './components/CreatorDirectory';
import BriefsHub from './components/BriefsHub';
import AIBriefBuilder from './components/AIBriefBuilder';
import EngagementsTracker from './components/EngagementsTracker';
import CreatorDetailModal from './components/CreatorDetailModal';
import PortfolioDetailModal from './components/PortfolioDetailModal';
import CreateBriefModal from './components/CreateBriefModal';
import DataModelModal from './components/DataModelModal';
import PresentationDeck from './components/PresentationDeck';
import HireCreatorModal from './components/HireCreatorModal';

import { CREATORS } from './data/creators';
import { INITIAL_BRIEFS } from './data/briefs';
import { INITIAL_ENGAGEMENTS } from './data/engagements';
import { Sparkles, Shield, Compass, FileCode, Presentation, Heart } from 'lucide-react';

export default function App() {
  // Navigation & Role State
  const [activeTab, setActiveTab] = useState('creators'); // 'creators', 'briefs', 'ai-builder', 'engagements'
  const [userRole, setUserRole] = useState('brand'); // 'brand', 'creator'
  const [searchQuery, setSearchQuery] = useState('');

  // Core Data State
  const [creators, setCreators] = useState(CREATORS);
  const [briefs, setBriefs] = useState(INITIAL_BRIEFS);
  const [engagements, setEngagements] = useState(INITIAL_ENGAGEMENTS);

  // Modal States
  const [selectedCreator, setSelectedCreator] = useState(null);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null); // { item, creator }
  const [isCreateBriefOpen, setIsCreateBriefOpen] = useState(false);
  const [isDataModelOpen, setIsDataModelOpen] = useState(false);
  const [isDeckOpen, setIsDeckOpen] = useState(false);
  const [hireTargetCreator, setHireTargetCreator] = useState(null);

  const [colorGrade, setColorGrade] = useState('champagne'); // 'champagne', 'amethyst', 'aurora'

  // Handlers
  const handleSelectPortfolioItem = (item, creator) => {
    setSelectedPortfolio({ item, creator });
  };

  const handleOpenHireCreator = (creator) => {
    setHireTargetCreator(creator);
  };

  const handlePublishBrief = (newBrief) => {
    setBriefs((prev) => [newBrief, ...prev]);
    setActiveTab('briefs');
  };

  const handleEngagementCreated = (newEngagement) => {
    setEngagements((prev) => [newEngagement, ...prev]);
    setActiveTab('engagements');
  };

  return (
    <div className="relative min-h-screen text-[#f3ead8] selection:bg-[#f3ead8]/20 selection:text-white flex flex-col justify-between">
      
      {/* Mystical Galaxy Canvas Background */}
      <BackgroundGalaxy colorGrade={colorGrade} />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Navigation Bar */}
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenCreateBrief={() => setIsCreateBriefOpen(true)}
          onOpenDataModel={() => setIsDataModelOpen(true)}
          onOpenDeck={() => setIsDeckOpen(true)}
          userRole={userRole}
          setUserRole={setUserRole}
          colorGrade={colorGrade}
          setColorGrade={setColorGrade}
        />

        {/* Main Content Area Based on Active Tab */}
        <main className="flex-1">
          {activeTab === 'creators' && (
            <>
              <HeroBanner
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                onExploreClick={() => {
                  const element = document.getElementById('creators-section');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                onAiStudioClick={() => setActiveTab('ai-builder')}
              />

              <div id="creators-section">
                <CreatorDirectory
                  creators={creators}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  onSelectCreator={setSelectedCreator}
                  onSelectPortfolioItem={handleSelectPortfolioItem}
                />
              </div>
            </>
          )}

          {activeTab === 'briefs' && (
            <BriefsHub
              briefs={briefs}
              onOpenCreateBrief={() => setIsCreateBriefOpen(true)}
              onOpenAiStudio={() => setActiveTab('ai-builder')}
              userRole={userRole}
            />
          )}

          {activeTab === 'ai-builder' && (
            <AIBriefBuilder
              onPublishBrief={handlePublishBrief}
            />
          )}

          {activeTab === 'engagements' && (
            <EngagementsTracker
              engagements={engagements}
              onUpdateEngagement={(updated) => {
                setEngagements(prev => prev.map(e => e.id === updated.id ? updated : e));
              }}
            />
          )}
        </main>

        {/* Ethereal Minimal Footer */}
        <footer className="relative z-10 border-t border-[#EFE7D8]/10 bg-[#08070D]/90 backdrop-blur-xl py-12 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FDFBF7]/20 to-[#C9B89B]/10 border border-[#EFE7D8]/30 flex items-center justify-center">
                  <span>✨</span>
                </div>
                <div>
                  <span className="font-cinzel text-lg font-bold tracking-[0.2em] text-[#FDFBF7]">
                    NEBULA
                  </span>
                  <p className="text-[11px] text-[#C9B89B] tracking-wider uppercase font-light">
                    The Ethereal AI Creator Exchange
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#C9B89B]">
                <button
                  onClick={() => setIsDataModelOpen(true)}
                  className="hover:text-[#FDFBF7] transition-colors flex items-center gap-1.5"
                >
                  <FileCode className="w-3.5 h-3.5" />
                  <span>Data Model Architecture Spec</span>
                </button>
                &bull;
                <button
                  onClick={() => setIsDeckOpen(true)}
                  className="hover:text-[#FDFBF7] transition-colors flex items-center gap-1.5"
                >
                  <Presentation className="w-3.5 h-3.5" />
                  <span>Pitch & Demo Slides</span>
                </button>
                &bull;
                <button
                  onClick={() => setActiveTab('ai-builder')}
                  className="hover:text-[#FDFBF7] transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Bonus AI Brief Builder</span>
                </button>
              </div>

              <div className="text-center sm:text-right text-xs text-[#C9B89B]/80 font-mono-code">
                <span>Designed for AI-Native Production &bull; 2026</span>
              </div>

            </div>
          </div>
        </footer>

      </div>

      {/* Global Interactive Modals */}
      
      {/* 1. Creator Detail Profile Modal */}
      {selectedCreator && (
        <CreatorDetailModal
          creator={selectedCreator}
          onClose={() => setSelectedCreator(null)}
          onSelectPortfolioItem={handleSelectPortfolioItem}
          onOpenHireCreator={handleOpenHireCreator}
        />
      )}

      {/* 2. Portfolio Item Deep Inspection Modal */}
      {selectedPortfolio && (
        <PortfolioDetailModal
          item={selectedPortfolio.item}
          creator={selectedPortfolio.creator}
          onClose={() => setSelectedPortfolio(null)}
          onOpenHireCreator={handleOpenHireCreator}
        />
      )}

      {/* 3. Manual Create Brief Modal */}
      <CreateBriefModal
        isOpen={isCreateBriefOpen}
        onClose={() => setIsCreateBriefOpen(false)}
        onPublishBrief={handlePublishBrief}
      />

      {/* 4. Data Model Architecture Deliverable Modal */}
      <DataModelModal
        isOpen={isDataModelOpen}
        onClose={() => setIsDataModelOpen(false)}
      />

      {/* 5. Pitch & Presentation Deck Deliverable Modal */}
      <PresentationDeck
        isOpen={isDeckOpen}
        onClose={() => setIsDeckOpen(false)}
      />

      {/* 6. Hire Creator Escrow Modal */}
      <HireCreatorModal
        creator={hireTargetCreator}
        briefs={briefs}
        isOpen={!!hireTargetCreator}
        onClose={() => setHireTargetCreator(null)}
        onEngagementCreated={handleEngagementCreated}
      />

    </div>
  );
}
