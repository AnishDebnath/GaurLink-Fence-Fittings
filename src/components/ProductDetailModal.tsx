import React from 'react';
import { ProductItem } from '../types';
import { ProductGraphic } from './ProductGraphic';
import { X, CheckCircle2, ShieldCheck, Download, ArrowRight, Layers, FileCheck } from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onRequestQuote: (product: ProductItem) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onRequestQuote,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-white border border-[#CBD5E1] rounded-xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 bg-[#F8FAF7] border-b border-[#E2E8F0]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#133E2B]/10 text-[#133E2B]">
                {product.categoryLabel}
              </span>
              {product.astmCompliance && (
                <span className="text-xs font-medium px-2 py-0.5 rounded bg-gray-200 text-gray-700">
                  {product.astmCompliance}
                </span>
              )}
            </div>
            <h3 className="text-2xl font-bold text-[#1B221E]">{product.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{product.shortDesc}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
          {/* Top visual & fast specs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <ProductGraphic id={product.id} name={product.name} className="h-56 w-full" />
              <div className="mt-3 flex items-center justify-between text-xs text-gray-500 px-1">
                <span>Material: <strong className="text-gray-800">{product.material}</strong></span>
                <span>Finish: <strong className="text-gray-800">{product.finish}</strong></span>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Technical Specifications
                </h4>
                <div className="border border-[#E2E8F0] rounded-lg overflow-hidden divide-y divide-[#E2E8F0] text-sm">
                  {product.specs.map((spec, idx) => (
                    <div key={idx} className="flex justify-between px-3 py-2 bg-white even:bg-[#F8FAF7]">
                      <span className="text-gray-500">{spec.label}</span>
                      <span className="font-semibold text-gray-900 text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {product.commonSizes && product.commonSizes.length > 0 && (
                <div className="mt-4">
                  <span className="text-xs font-semibold text-gray-500 block mb-1.5">Common Sizing:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.commonSizes.map((size, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium px-2 py-1 bg-[#EEF2EC] text-[#133E2B] rounded border border-[#D5DDD2]"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Detailed Description */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-800 mb-2">
              Engineering Overview
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-800 mb-2.5">
              Contractor Advantages
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#133E2B] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div className="bg-[#F8FAF7] p-4 rounded-lg border border-[#E2E8F0]">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-600 block mb-2">
              Standard Applications
            </span>
            <div className="flex flex-wrap gap-2">
              {product.applications.map((app, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-white text-gray-700 px-3 py-1 rounded-md border border-[#E2E8F0] font-medium"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

          {/* Trust badge note */}
          <div className="flex items-center gap-3 p-3.5 bg-[#EFF5F1] rounded-lg border border-[#C5DDCB] text-xs text-[#133E2B]">
            <ShieldCheck className="w-5 h-5 shrink-0 text-[#133E2B]" />
            <span>
              <strong>ISO 9001:2015 Certified Manufacturing:</strong> All Gaur Link fence hardware is manufactured with strict quality inspection. Certified mill test reports &amp; zinc coating thickness verifications supplied with every bulk container order.
            </span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-5 bg-[#F8FAF7] border-t border-[#E2E8F0]">
          <div className="text-xs text-gray-500 text-center sm:text-left">
            Need custom stamping or sizing? We make dies per requirement.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onRequestQuote(product);
                onClose();
              }}
              className="w-1/2 sm:w-auto px-5 py-2.5 text-sm font-bold text-white bg-[#133E2B] hover:bg-[#0D2B1E] rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
